import { MathExpression, Metric, TreatMissingData } from 'aws-cdk-lib/aws-cloudwatch';
import { CfnCacheCluster } from 'aws-cdk-lib/aws-elasticache';
import { IConstruct } from 'constructs';
import { Alarmer } from '../alarmer';

export class ElasticacheServiceAlarmer extends Alarmer {
  bestPractice(node: IConstruct): void {
    //CacheHitRate < 0.8
    if (node instanceof CfnCacheCluster) {
      const cluster = node as CfnCacheCluster;
      if ( cluster.engine == 'redis' ) {
        const mathExpression = new MathExpression({
          expression: 'cacheHits / (cacheHits + cacheMisses)',
          usingMetrics: {
            cacheHits: new Metric({
              namespace: 'AWS/ElastiCache',
              metricName: 'CacheHits',
              dimensionsMap: {
                CacheClusterId: node.ref,
              },
              statistic: 'max',
            }),
            cacheMisses: new Metric({
              namespace: 'AWS/ElastiCache',
              metricName: 'CacheMisses',
              dimensionsMap: {
                CacheClusterId: node.ref,
              },
              statistic: 'max',
            }),
          },
        });

        this.alarm(node, 'CacheRatio-'+this.randomSeed(), {
          metric: mathExpression,
          threshold: 0.8,
          evaluationPeriods: 1,
          treatMissingData: TreatMissingData.NOT_BREACHING,
        });

        this.alarm(node, 'CpuUtilization-'+this.randomSeed(), {
          metric: new Metric({
            namespace: 'AWS/ElastiCache',
            metricName: 'EngineCPUUtilization',
            dimensionsMap: {
              CacheClusterId: node.ref,
            },
            statistic: 'Average',
          }),
          threshold: 90,
          evaluationPeriods: 1,
          treatMissingData: TreatMissingData.NOT_BREACHING,
        });
      }
    }
  }

  errors(node: IConstruct): void {
    if (node instanceof CfnCacheCluster) {
      this.alarm(node, 'DatabaseMemoryUsagePercentage-'+this.randomSeed(), {
        metric: new Metric({
          namespace: 'AWS/ElastiCache',
          metricName: 'DatabaseMemoryUsagePercentage',
          dimensionsMap: {
            CacheClusterId: 'max',
          },
          statistic: 'max',
        }),
        threshold: 100,
        evaluationPeriods: 1,
        treatMissingData: TreatMissingData.NOT_BREACHING,
      });
    }
  }

  throttles(node: IConstruct): void {
    if (node instanceof CfnCacheCluster) {
      const message = 'No throttles exist. Skipping ' + node.node.id;
      if (this.logIgnores) {
        this.logInfo(message);
      } else {
        this.logDebug(message);
      }
    }
  }

}