type Props = {
  name: string;
  avatar_url: string;
  bio: string;
};

export function UserCard({ name, avatar_url, bio }: Props) {
  return (
    <section>
      <h2>{name}</h2>
      <img src={avatar_url} alt="" width={240}></img>
      <p>{bio}</p>
    </section>
  );
}
