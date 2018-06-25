FROM dalongrong/node-yarn:9
WORKDIR /app
COPY . /app
RUN yarn config set registry https://registry.npm.taobao.org
ENTRYPOINT [ "yarn","start" ]