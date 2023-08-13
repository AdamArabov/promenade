import Card from "./components/card";

export default function Home() {
  return (
    <div className="flex justify-end"> {/* Use flex utilities to align the Card to the right */}
      <Card>
        <h1>hello</h1>
      </Card>
    </div>
  );
}