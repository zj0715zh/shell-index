/**
 * 默认配置
 * @author itzoujie
 */
module.exports = {
  redisConfig: {
    host: "localhost",
    port: "6379",
    // password: "",
    db: 2,
  },
  // MySQL 配置
  dbConfig: {
    database: "shellindex",
    username: "root",
    password: "zj-ZH19900808",
    host: "localhost",
    port: 3306,
  },
  // 百度翻译配置，自行申请免费版即可（https://fanyi-api.baidu.com/）
  baiduFanYiConfig: {
    appid: "20221128001474486",
    key: "_xerItUl9DLu7w7qtHZ7",
  },
};
