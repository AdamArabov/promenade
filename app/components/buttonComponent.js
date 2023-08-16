
export async function getStaticProps() {
  // Fetch data here
  const data = await fetchData();

  return {
    props: {
      data,
    },
  };
} 



export default function ButtonComponent() {
    return (
      <button className="mt-4 text-white border border-white px-4 py-2 rounded">
        Scroll to Learn More
      </button>
    );
  }
