import { Button, Container, Modal, UserTable } from "../../components";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import arrowForward from "../../assets/icons/arrow-forward.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import avatarImg from "../../assets/icons/Avatar.svg";
import notifIcon from "../../assets/icons/Union.svg";
import { Aside } from "../../components/aside";
import { modelsAction } from "../../store";

export const UserPage = () => {
  const { listCategory, loading, error } = useSelector((state) => state.models);

  const token = localStorage.getItem("token");

  const elModal = document.querySelector(".admin-panel__modal");

  const dispatch = useDispatch();

  const styles = {
    opacity: loading ? 0.7 : 1,
  };

  const dispath = useDispatch();
  const { formType, tableType, clickedId } = useSelector(
    (state) => state.models
  );

  const { users } = useSelector((state) => state.users);

  const navigate = useNavigate();

  const onDeleteClick = async (evt) => {
    // const id = evt.target.dataset.id;

    fetch("http://localhost:2004/avtosalon/delete-user-by-admin", {
      method: "DELETE",
      headers: {
        "Content-type": "Application/json",
        token,
        // userRole,
      },
      // body: JSON.stringify({ id: id }),
    })
      .then((res) => {
        if (res.status !== 200) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .then((data) => {
        alert(data);
        navigate("/login");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="admin-panel">
      <header className="admin-panel__header">
        <Container style={{ maxWidth: "1020px", margin: "0 auto" }}>
          <div className="admin-panel__header-inner-wrapper">
            <Button style={{ margin: "0" }} to={"/"}>
              Asosiyga qaytish
            </Button>
            <div className="admin-panel__header-right">
              <img src={notifIcon} alt="notification" />
              <button
                onClick={(e) => {
                  dispatch(modelsAction.setFormType("edit"));
                  dispatch(modelsAction.setTableType("users"));
                  dispatch(modelsAction.setClickedId(""));
                }}
                className="profile-button profile-button-3"
              >
                Edit account
              </button>
              <button
                type="click"
                onClick={onDeleteClick}
                className="profile-button profile-button-2"
              >
                Delete account
              </button>
              <button
                className="profile-button profile-button-1"
                onClick={() => {
                  localStorage.setItem("token", "");
                  localStorage.setItem("userRole", "");
                  navigate("/login");
                }}
              >
                Log out
              </button>
              <div className="user-page__profile-img-wrapper">
                <img
                  className="user-page__profile-img"
                  width={48}
                  height={48}
                  src={users?.profileImg}
                  alt="profile-image"
                />
                <span className="user-page__profile-name">
                  {users?.userEmail}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </header>
      <div className="">
        <Container style={{ maxWidth: "1020px", margin: "0 auto" }}>
          <div className="admin-panel__control-wrapper">
            <div className="admin-panel__top-wrapper">
              <div className="admin-panel__left-wrapper">
                <span className="admin-panel__indicator"></span>
                <p className="admin-panel__text">
                  {tableType === "user-likes-table"
                    ? "Tanlangan mashinalar ro'yxati (Liked)"
                    : tableType === "user-buy-table"
                    ? "Sotib olingan mashinalar ro'yxati"
                    : "Tanlangan mashinalar ro'yxati (Liked)"}
                </p>
              </div>
              <div className="admin-panel__button-wrapper"></div>
            </div>

            <UserTable></UserTable>

            <div className="admin-panel__pagination">
              <Link>
                <img src={arrowLeft} alt="arrow-left" />
              </Link>
              <ul className="admin-panel__pages-list">
                <li className="admin-panel__pages-list__item">
                  <Link className="admin-panel__page">1</Link>
                </li>
                <li className="admin-panel__pages-list__item">
                  <Link className="admin-panel__page">2</Link>
                </li>
                <li className="admin-panel__pages-list__item">
                  <Link className="admin-panel__page">3</Link>
                </li>
                <li className="admin-panel__pages-list__item">
                  <Link className="admin-panel__page">...</Link>
                </li>
              </ul>

              <Link>
                <img
                  className="admin-panel__arrow-forward"
                  src={arrowForward}
                  alt="arrow-right"
                />
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Modal elModal={elModal}></Modal>

      <Aside></Aside>
    </div>
  );
};
