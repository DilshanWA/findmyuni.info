import React, { useState, useEffect } from "react";
import '../styles/result_table.css';
import  Loading from '../messages/Loadingm'
import ErrorLoading from '../messages/Errorloading'

export const ResutlTable = ({ props }) => {
  const [data, Datafun] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const handleCloseErrorModal = (e) => {
    setIsErrorModalOpen(e);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (Array.isArray(props) && props.length !== 0) {
          const modifiData = props.map(obj => {
            if (obj.zscore === '0') {
              return { ...obj, zscore: 'සු.නෝ (සුදුසුකම් ලබා නොමැත)'};
            } else {
              return obj;
            }
          });
          await new Promise(resolve => setTimeout(resolve, 2000));
          Datafun(modifiData);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setError(true);
          handleCloseErrorModal(true);
        }
      } catch (error) {
        setIsLoading(false);
        setError(true);
        handleCloseErrorModal(true);
      }
    };
  
    fetchData();
  }, [props]);
  

  return (
    <div className="table_div">
      {isLoading ? (
        <Loading />
      ) : error ? (
        isErrorModalOpen ? (
          <ErrorLoading onClose={handleCloseErrorModal} />
        ) : (
          <div>
          </div>
        )
      ) : (
        
        <table className="tabales">
          <thead className="t_head">
            <tr className="table_tr">
              <th>University</th>
              <th>Course</th>
              <th>Zscore</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.university}</td>
                <td>{row.course}</td>
                <td>{row.zscore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ResutlTable;
