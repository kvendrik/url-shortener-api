```
git clone git@github.com:kvendrik/url-shortner-api.git
npm i
npm start
```

#### Add URL
```
curl -H "Content-Type: application/json" -X POST
-d '{ url: 'http://google.com' }' /url
```

#### Get URL
```
curl /url/:token
```