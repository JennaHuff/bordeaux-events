async function getData(res) {
    const response = await fetch(
        `https://opendata.bordeaux-metropole.fr/api/explore/v2.1/catalog/datasets/met_agenda/records`,
        { cache: "force-cache" }
    );
    const data = await response.json();
    res.status(200).json({ data });
}

export default function handler(req, res) {
    getData(res);
}
