# wetv_ant_theft

## Deploy

```
# install dependencies  只有lambda_origin有依赖包。lambda_view不需要npm install
cd lambda_origin 
npm install
cd ..

# build by sam
sam build

# deploy by sam  
```Stack Name:需要改成没有部署过的名字. EdgeFunctionRole为自定义Role Name，需要使用CAPABILITY_NAMED_IAM
sam deploy --guided --capabilities CAPABILITY_NAMED_IAM

# Add Lambda@Edge of CloudFront as lambda trigger on AWS Console.
```

## Test

```
# Generate ViewKey by vk_crypt_final.js

# Request for m3u8
curl -i "https://d2tqguseg7ue7b.cloudfront.net/01DF3163580EBA1F8843F79B58177E0C8FD24B3E0F74D6C3AC7AD3B2FB2DB2F183FB9D5ABD10E192D51D033DE7BF1F4FAADC66110A7348F4B61A9BD6E302C5DD45/t0030xwea0g.321002.ts.m3u8?ver=4&cdn=akm"

# Request for ts file.
curl -L -v "https://d2tqguseg7ue7b.cloudfront.net/01DF3163580EBA1F8843F79B58177E0C8FD24B3E0F74D6C3AC7AD3B2FB2DB2F183FB9D5ABD10E192D51D033DE7BF1F4FAADC66110A7348F4B61A9BD6E302C5DD45/t0030xwea0g.321002.1.ts?index=0&start=0&end=12000&brs=0&bre=788847&ver=4&token=27e2fea5ed8b70598bf6650e98b91ae5&ver=4&cdn=akm"

curl -L -v "https://d2tqguseg7ue7b.cloudfront.net/01DF3163580EBA1F8843F79B58177E0C8FD24B3E0F74D6C3AC7AD3B2FB2DB2F183FB9D5ABD10E192D51D033DE7BF1F4FAADC66110A7348F4B61A9BD6E302C5DD45/t0030xwea0g.321002.5.ts?index=134&start=1403720&end=1415720&brs=9443240&bre=10518975&ver=4&token=9459aabfead957d7126673f60293a874"


curl -L -v "https://d2tqguseg7ue7b.cloudfront.net/014673C2785E598E8FF9438D170E497D65C1E722C68E6E5FB5A66945B8C3A397E3C80ADB98A90B6ED6C0362FE6B09CD64D1B8684F7F039C27CE783A9F54681C37F/05_t0030xwea0g.321002.1.ts?index=5&start=59960&end=71960&brs=5236552&bre=7209611&ver=4&token=bfbfe99396ce95f38e92143dcd0d355b"
```

## References

SAM with CloudFront
https://aws.amazon.com/blogs/networking-and-content-delivery/managing-lambdaedge-and-cloudfront-deployments-by-using-a-ci-cd-pipeline/





