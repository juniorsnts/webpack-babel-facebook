import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Junior Santos",
          avatar: "https://scontent.fmcp1-1.fna.fbcdn.net/v/t1.0-9/22688388_1169654469835055_3821205223378091104_n.jpg?_nc_cat=101&_nc_oc=AQkb6VZAhj_0YJNviPoHA8C9MfANra6_Vq5OeHVk3LYXdwaBoQLP6TntbPmFMZ6Bto8&_nc_ht=scontent.fmcp1-1.fna&oh=d3384abf33568fdb341677f3c66587e7&oe=5E582B14"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://scontent.fmcp1-1.fna.fbcdn.net/v/t1.0-9/22688388_1169654469835055_3821205223378091104_n.jpg?_nc_cat=101&_nc_oc=AQkb6VZAhj_0YJNviPoHA8C9MfANra6_Vq5OeHVk3LYXdwaBoQLP6TntbPmFMZ6Bto8&_nc_ht=scontent.fmcp1-1.fna&oh=d3384abf33568fdb341677f3c66587e7&oe=5E582B14"
            },
            content: "A rocketseat esta sempre em busca de talentos, inclusiva 80% dos funcionarios foram alunos da bootcamp."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Junior Santos",
          avatar: "https://scontent.fmcp1-1.fna.fbcdn.net/v/t1.0-9/22688388_1169654469835055_3821205223378091104_n.jpg?_nc_cat=101&_nc_oc=AQkb6VZAhj_0YJNviPoHA8C9MfANra6_Vq5OeHVk3LYXdwaBoQLP6TntbPmFMZ6Bto8&_nc_ht=scontent.fmcp1-1.fna&oh=d3384abf33568fdb341677f3c66587e7&oe=5E582B14"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://scontent.fmcp1-1.fna.fbcdn.net/v/t1.0-9/22688388_1169654469835055_3821205223378091104_n.jpg?_nc_cat=101&_nc_oc=AQkb6VZAhj_0YJNviPoHA8C9MfANra6_Vq5OeHVk3LYXdwaBoQLP6TntbPmFMZ6Bto8&_nc_ht=scontent.fmcp1-1.fna&oh=d3384abf33568fdb341677f3c66587e7&oe=5E582B14"
            },
            content: "A rocketseat esta sempre em busca de talentos, inclusiva 80% dos funcionarios foram alunos da bootcamp."
          }
        ]
      },
    ]
  };
  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(post => <Post key={post.id} data={post} />)}
      </div>
    )
  }
}

export default PostList;