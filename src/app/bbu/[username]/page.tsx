// route to show user details and his own blogs

export default function Page({ params }: { params: { username: string } }) {
  return <h1>username: {params.username}</h1>;
}
