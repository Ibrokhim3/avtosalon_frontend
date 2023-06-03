import { Button, CartegoryTable, Container, Input } from "../../components";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import arrowForward from "../../assets/icons/arrow-forward.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import avatarImg from "../../assets/icons/Avatar.svg";
import notifIcon from "../../assets/icons/Union.svg";
import { Aside } from "../../components/aside";
import { ModelTable } from "../../components/model-table";
import { modelsAction } from "../../store";

export const AdminPanel = () => {
  const elModal = document.querySelector(".admin-panel__modal");

  const dispath = useDispatch();
  const { formType, tableType } = useSelector((state) => state.models);

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
              <img src={avatarImg} alt="profile-image" />
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
                    : "Kategoriyalar"}
                </p>
              </div>
              <div className="admin-panel__button-wrapper">
                <Button
                  onClick={(e) => {
                    // elModal.style.display = "block";
                    dispath(modelsAction.setFormType("add-category"));
                  }}
                  style={{ width: 192, padding: "12px 17.5px", margin: 0 }}
                >
                  Kategoriya qo’shish
                </Button>
              </div>
            </div>
            {tableType === "category" ? (
              <CartegoryTable></CartegoryTable>
            ) : tableType === "cars" ? (
              <ModelTable></ModelTable>
            ) : tableType === "users" ? (
              ""
            ) : (
              ""
            )}
            {/* <ModelTable></ModelTable> */}

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

      <div
        style={formType ? { display: "block" } : null}
        className="admin-panel__modal"
      >
        <div className="admin-panel__modal-content">
          <div className="admin-panel__modal-header">
            <span
              style={{ background: "#CABDFF" }}
              className="admin-panel__indicator"
            ></span>
            <p className="admin-panel__modal-title">
              {formType === "edit-category"
                ? "Kategoriyani o'zgartirish"
                : "Kategoriya qo'shish"}
            </p>
            <span
              className="admin-panel__modal-close"
              onClick={() => {
                elModal.style.display = "none";
                dispath(modelsAction.setFormType(""));
              }}
            ></span>
          </div>
          <form className="admin-panel__modal-form">
            <div className="admin-panel__modal-input-wrapper">
              <Input placeholder={"BYD"} id={"categoryTextInput"}>
                Markasi
              </Input>
              <Input
                type={"file"}
                placeholder={"Yuklash"}
                id={"categoryFileInput"}
              >
                Rasm
              </Input>
            </div>

            <Button
              onClick={() => {
                elModal.style.display = "none";
                dispath(modelsAction.setFormType(""));
              }}
              style={{ marginTop: 40 }}
            >
              Saqlash
            </Button>
          </form>
        </div>
      </div>
      <Aside></Aside>
    </div>
  );
};
