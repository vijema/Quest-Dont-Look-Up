import React, { useEffect } from 'react';

const MajorHouse = () => {
  useEffect(() => {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('isMajorHouseAttended='))
      .split('=')[1];
    console.log(cookieValue);
  }, []);

  return (
    <div className="locationMajorHouse">
      <div className="CommonBg">
        {document.cookie.includes('isMajorHouseAttended=false') ? (
          <p>Вы не посещали дом мэра.</p>
        ) : (
          <p>Вы посещали дом мэра.</p>
        )}
      </div>
    </div>
  );
};

export default MajorHouse;
