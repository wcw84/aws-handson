# sam-app

## Deploy

```
# build by sam
sam build

# deploy by sam  
```Stack Name:需要改成没有部署过的名字. EdgeFunctionRole为自定义Role Name，需要使用CAPABILITY_NAMED_IAM
sam deploy --guided --capabilities CAPABILITY_NAMED_IAM

# Add Lambda@Edge of CloudFront as lambda trigger on AWS Console.
```