import http from "http";
import url from "url"
import util from "util"
import os from "os"

import chalk from "chalk";

import { getDateTime, applicationName, getDate } from "./time/index.mjs"

const PORT = 5000

http
.createServer((req, res)=>{

    const requestPath = req.url;
    const parsed = url.parse(requestPath)
    const platform = os.platform()
    const arch = os.arch();

    const response = util.format("your is looking for %s query is %s. Application is running on %s and %s, the current time is %s", requestPath, parsed.query, platform, arch, getDateTime())

    console.log(response);

    console.log(new Date(), "def");
    
    console.log("hello world");

    res.end(response);
})
.listen(PORT, ()=>{
    console.log(chalk.bgBlue(chalk.greenBright("Server started on port:") + chalk.bold(PORT)))
});
