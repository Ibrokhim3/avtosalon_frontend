import {
  Button,
  CartegoryTable,
  Container,
  Modal,
  UsersTable,
  // UsersTable,
} from "../../components";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import arrowForward from "../../assets/icons/arrow-forward.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import avatarImg from "../../assets/icons/Avatar.svg";
import notifIcon from "../../assets/icons/Union.svg";
import { Aside } from "../../components/aside";
import { ModelTable } from "../../components/model-table";
import { modelsAction } from "../../store";
import { useEffect } from "react";

export const AdminPanel = () => {
  const { listCategory, loading, error } = useSelector((state) => state.models);

  const elModal = document.querySelector(".admin-panel__modal");

  const dispatch = useDispatch();

  const styles = {
    opacity: loading ? 0.7 : 1,
  };

  const dispath = useDispatch();
  const { formType, tableType, clickedId } = useSelector(
    (state) => state.models
  );

  const navigate = useNavigate();

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
                className="profile-button profile-button-1"
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
              >
                Log out
              </button>
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
                  {tableType === "category"
                    ? "Kategoriyalar"
                    : tableType === "cars"
                    ? "Mashinalar"
                    : tableType === "users"
                    ? "Foydalanuvchilar"
                    : tableType === "users-cars"
                    ? "Foydalanuvchiga tegishli mashinalar"
                    : "Kategoriyalar"}
                </p>
              </div>
              <div className="admin-panel__button-wrapper">
                {formType !== "users-cars" ? (
                  <Button
                    onClick={(e) => {
                      // elModal.style.display = "block";
                      dispath(modelsAction.setFormType("add"));
                    }}
                    style={{ width: 192, padding: "12px 17.5px", margin: 0 }}
                  >
                    {tableType === "category"
                      ? "Kategoriya"
                      : tableType === "cars"
                      ? "Mashina"
                      : tableType === "users"
                      ? "Foydalanuvchi"
                      : "Kategoriya"}
                    &nbsp;qo'shish
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </div>
            {tableType === "category" ? (
              <CartegoryTable></CartegoryTable>
            ) : tableType === "cars" ? (
              <ModelTable></ModelTable>
            ) : tableType === "users" ? (
              <UsersTable></UsersTable>
            ) : tableType === "users-cars" ? (
              <ModelTable></ModelTable>
            ) : (
              <CartegoryTable></CartegoryTable>
            )}

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
