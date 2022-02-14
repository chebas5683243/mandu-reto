import axios from "axios";
import { useEffect, useState } from "react";
import qs from "qs";

export const useFetchDivisions = (auto = true) => {
  const [divisions, setDivisions] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const [loadingDivisions, setLoadingDivisions] = useState(false);
  const [divisionsNames, setDivisionsNames] = useState([]);
  const [levels, setLevels] = useState([]);
  const [upperDivisionsNames, setUpperDivisionsNames] = useState([]);

  const fetchDivisions = async (params = {}) => {
    setLoadingDivisions(true);
    await axios.get(`http://localhost:8000/api/division?${qs.stringify(params)}`)
      .then(response => {
        let data = response.data.data;
        setDivisions(data.divisions.data);
        setPagination(p => ({
          current: data.divisions.current_page,
          pageSize: data.divisions.per_page,
          total: data.divisions.total
        }));
        setDivisionsNames(data.divisions_names);
        setLevels(data.levels);
        setUpperDivisionsNames(data.upper_divisions_names);
      })
      .catch(err => {
        console.log("Err :", err);
      })
      .finally(() => {
        setLoadingDivisions(false);
      })
  };

  useEffect(() => {
    if (auto) fetchDivisions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { divisions, pagination, loadingDivisions, divisionsNames, levels, upperDivisionsNames, fetchDivisions };
}

// export const