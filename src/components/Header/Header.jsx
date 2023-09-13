import profile from "../../assets/images/profile.png";

export default function header() {
  return (
    <header className="flex justify-between p-4 mx-5 border-b-2">
      <h1 className="text-4xl font-semibold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
}
