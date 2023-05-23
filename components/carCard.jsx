const { useParams } = require("next/navigation.js");

function CarCard() {
  const id = useParams().id;

  useEffect(() => {
    setLoading(true);
    fetch(`https://sandbox.codeworksacademy.com/api/cars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [id]);
}
