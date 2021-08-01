import axios from 'axios';

export default async function fetcher(url: string) {
  const res = await axios.get(url);

  return res.data;
};

export const getImgUrl = (id: number) => {
  // https://pokeres.bastionbot.org/images
  const imageUrl = `${process.env.NEXT_PUBLIC_API_POKI_IMAGE_SPRITE_URL}/${id}.png`
  return imageUrl
}
