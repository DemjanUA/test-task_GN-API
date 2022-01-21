# Welcome to GN-API 👋
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
![Prerequisite](https://img.shields.io/badge/node-16.x-blue.svg)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/DemjanUA/test-task_GN-API#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/DemjanUA/test-task_GN-API/graphs/commit-activity)
[![License: ISC](https://img.shields.io/github/license/DemjanUA/GN-API)](https://github.com/DemjanUA/test-task_GN-API/blob/master/LICENSE)

> The most efficient 💡 gn API you have ever used

### 🏠 [Homepage](https://github.com/DemjanUA/test-task_GN-API#readme)

### ✨ [Demo](https://powerful-ridge-85825.herokuapp.com/?value=56)

## Prerequisites

- node 16.x

## Install

```sh
git clone https://github.com/DemjanUA/test-task_GN-API.git
```

## Usage

GN-API is such simple to use that it has just one endpoint
```sh
GET /?value=INTEGER
```
If the integer is a multiple of 3, it returns return "G", 
If the integer is a multiple of 5, it returns return "N", 
If the integer is a multiple of both 3 and 5, then both "GN" should be returned. 
otherwise the provided integer should be returned. 

```sh
cd test-task_GN-API
node src/app
```
## Try it with
```sh
curl --location --request GET 'http://localhost:8080?value=YOUR_VALUE'
```
Where <YOUR_VALUE> is an integer you want to GN 

## Run tests

```sh
npm run test
```

## Author

👤 **Dmytro Uchkin**

* Github: [@DemjanUA](https://github.com/DemjanUA)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/dmytro-uchkin-7b0553110\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/dmytro-uchkin-7b0553110\/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/DemjanUA/test-task_GN-API/issues). 

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2022 [Dmytro Uchkin](https://github.com/DemjanUA).

This project is [ISC](https://github.com/DemjanUA/test-task_GN-API/blob/master/LICENSE) licensed.
