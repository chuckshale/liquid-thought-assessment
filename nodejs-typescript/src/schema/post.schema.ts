import { object, string } from 'yup';

const payload = {
  body: object({
    title: string()
      .required('A title needs to be added')
      .min(10, 'Post title too short --- must have a min 10 chars'),
    body: string()
      .required('A body needs to be added')
      .min(10, 'A body must have atleast 10 chars'),
  }),
};

const paramsPayload = {
  params: object({
    postId: string().required('The post Id is required'),
  }),
};

export const createPostSchema = object({
  ...payload,
});

export const UpdatePostSchema = object({
  ...paramsPayload,
  ...payload,
});

export const deletePostSchema = object({
  ...paramsPayload,
});
