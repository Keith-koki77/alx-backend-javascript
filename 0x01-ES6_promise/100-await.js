import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const pic = await uploadPhoto();
    const user = await createUser();
    return {
      photo: pic,
      user,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
