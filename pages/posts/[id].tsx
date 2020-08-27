import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '../../src/API/Layout';
import { Post } from '../../src/interfaces';
import { POST_URL } from '../../src/API/config';
import axios from 'axios';

interface PostWithIdProps {
  post: Post;
}

const PostWithID: FC<PostWithIdProps> = ({ post }) => {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <article>{post.body}</article>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query: { id } }) => {
  const { data } = await axios.get(POST_URL + '/' + id);
  const post = data;
  return { props: { post } };
};

export default PostWithID;
