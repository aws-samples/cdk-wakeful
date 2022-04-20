import boto3

def handler(event, context):
    return {
        'statusCode': 200,
        'body': """
        <html>
            <body>
                <h1>Hello CDK Gurus!</h1>
            </body>
        </html>
        """
    }