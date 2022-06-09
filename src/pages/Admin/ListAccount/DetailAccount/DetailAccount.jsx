import {
  albumstAction,
  userAction,
} from "../../../../redux/actions/AccountAction";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

export default function ListAccount(props) {
  const { account, albums } = useSelector((state) => state.AccountReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAction(props.match.params.id));
    dispatch(albumstAction(props.match.params.id));
  }, []);

  return (
    <div id="detailAccount" className="detailAccount">
      <h2 className="mb-5">Detail Accounts</h2>
      <div className="d-flex">
        <div className="detailAccount__info w-50">
          <h3 className="mb-3">Info</h3>
          {account.map((user, index) => {
            return (
              <div key={index}>
                <h6 className="mb-3">- ID: {user.id}</h6>
                <h6 className="mb-3">- Name: {user.name}</h6>
                <h6 className="mb-3">- User Name: {user.username}</h6>
                <h6 className="mb-3">- Email: {user.email}</h6>
                <h6>- Address:</h6>
                <p className="ml-4 mb-2">+ Streel: {user.address.street}</p>
                <p className="ml-4 mb-2">+ Suite: {user.address.suite}</p>
                <p className="ml-4 mb-2">+ City: {user.address.city}</p>
                <p className="ml-4 mb-2">+ Zipcode: {user.address.zipcode}</p>
                <p className="ml-4 mb-2">
                  + Longtitude: {user.address.geo.lng}
                </p>
                <p className="ml-4 mb-4">+ Latitude: {user.address.geo.lat}</p>
                <h6 className="mb-3">- Phone: {user.phone}</h6>
                <h6 className="mb-3">- Website: {user.website}</h6>
                <h6>- Company: {user.company.name}</h6>
                <p className="ml-4 mb-2">
                  + Catch Phrase: {user.company.catchPhrase}
                </p>
                <p className="ml-4 mb-2">+ BS: {user.company.bs}</p>
              </div>
            );
          })}
        </div>
        <div className="detailAccount__albums w-50">
          <h3 className="mb-3">Albums</h3>
          {albums.map((album, index) => {
            return (
              <div key={index}>
                <p>
                  <span className="mr-3">{index + 1}</span> {album.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
