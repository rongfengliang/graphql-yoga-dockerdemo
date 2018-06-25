const { GraphQLServer } = require('graphql-yoga')
const typeDefs = `schema.graphql`
const resolvers = {
  Query: {
    hello: function(_,name){
        return {
            name:`${name.name}`,
            age:33
        }
    },
    localtype:function(parent,ob){
      return {
        name:`${ob.name}`,
        age: ob.name.length
       }
    },
    listOfStrings:function(parent){
        return [
          "dalong",
          "demoapp",
          "rong"
        ]
    }
  },
  Mutation:{
    addUser:function(parent,ob){
      console.log(ob)
      return JSON.stringify(ob)
    }
  }
}

const options = {
    port: 8000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
  }
const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))