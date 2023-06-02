import { Button, Container, Input, InputText } from "../../components";

import avatarImg from "../../assets/icons/Avatar.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import arrowForward from "../../assets/icons/arrow-forward.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import notifIcon from "../../assets/icons/Union.svg";
import trashIcon from "../../assets/icons/trash.svg";
import editIcon from "../../assets/icons/edit.svg";
import { Aside } from "../../components/aside";
import { Link } from "react-router-dom";
import { useState } from "react";

export const AdminPanel = () => {
  const elModal = document.querySelector(".admin-panel__modal");

  const [formType, setFormType] = useState("");

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
                <p className="admin-panel__text">Kategoriyalar</p>
              </div>
              <div className="admin-panel__button-wrapper">
                <Button
                  onClick={(e) => {
                    elModal.style.display = "block";
                    setFormType("");
                  }}
                  style={{ width: 192, padding: "12px 17.5px", margin: 0 }}
                >
                  Kategoriya qo’shish
                </Button>
              </div>
            </div>
            {/* <table className="admin-panel__table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Markasi</th>
                  <th>Gearbook</th>
                  <th>Tanirovkasi</th>
                  <th>Motor</th>
                  <th>Color</th>
                  <th>Year</th>
                  <th>Distance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>BYD</td>
                  <td>Sinxron karobka</td>
                  <td>Yoq</td>
                  <td>300kw/soat</td>
                  <td>2023</td>
                  <td>Oq</td>
                  <td>0 km</td>
                  <td className="admin-panel__td-button">
                    <button
                      data-type="delete-category"
                      className="control-button"
                    >
                      <img width={22} src={trashIcon} alt="delete/trash" />
                    </button>
                  </td>
                  <td className="">
                    <button
                      data-type="edit-category"
                      onClick={() => {
                        elModal.style.display = "block";
                        setFormType("edit-category");
                      }}
                      className="control-button"
                    >
                      <img width={22} src={editIcon} alt="edit/pen" />
                    </button>
                  </td>
                  <td>
                    <Link>
                      <img src={arrowRight} alt="arrow-right" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table> */}
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

      <div className="admin-panel__modal">
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
              onClick={() => (elModal.style.display = "none")}
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
              onClick={() => (elModal.style.display = "none")}
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
