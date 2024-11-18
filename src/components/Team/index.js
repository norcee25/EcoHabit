import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";

const Team = () => {
  const [Team, setTeam ] = useState ({})
  useEffect (() => {
      const db = getDatabase();
      const TeamRef = ref(db, "Team");
      onValue(TeamRef, (snapshot) => {
          const data = snapshot.val();
          setTeam(data);
      });
    }, []);
    return(
        <section className="volunteer-section section-padding" id="section_4">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12">
          <img src="assets/images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg" className="volunteer-image img-fluid" alt />
          <div className="custom-block-body text-center">
            <h4 className="text-white mt-lg-3 mb-lg-3">{Team.satu}</h4>
            <p className="text-white">{Team.subsatu} </p>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <img src="assets/images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg" className="volunteer-image img-fluid" alt />
          <div className="custom-block-body text-center">
            <h4 className="text-white mt-lg-3 mb-lg-3">{Team.dua}</h4>
            <p className="text-white">{Team.subsatu}</p>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <img src="assets/images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg" className="volunteer-image img-fluid" alt />
          <div className="custom-block-body text-center">
            <h4 className="text-white mt-lg-3 mb-lg-3">{Team.tiga}</h4>
            <p className="text-white">{Team.subsatu}</p>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <img src="assets/images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg" className="volunteer-image img-fluid" alt />
          <div className="custom-block-body text-center">
            <h4 className="text-white mt-lg-3 mb-lg-3">Tanaty, Norce Shoudick</h4>
            <p className="text-white">{Team.subsatu}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Team;