# lambda-edge
本工程用sam管理，实现了cloudfront的4个trigger，对应相应4的目录:
- view_request
- view_response
- origin_request
- origin_response

## Deploy
```
# build by sam
sam build

# deploy by sam  
sam deploy --guided --capabilities CAPABILITY_NAMED_IAM

# Add Lambda@Edge of CloudFront as lambda trigger on AWS Console.
```