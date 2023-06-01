import { Button, Container } from "../../components";

import avatarImg from "../../assets/icons/Avatar.svg";
import notifIcon from "../../assets/icons/Union.svg";
import { Aside } from "../../components/aside";

export const AdminPanel = () => {
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
                <p className="admin-panel__text">Mashinalar</p>
              </div>
              <div className="admin-panel__button-wrapper">
                <Button
                  style={{ width: 192, padding: "12px 17.5px", margin: 0 }}
                >
                  Kategoriya qo’shish
                </Button>
                <Button
                  style={{ width: 192, padding: "12px 17.5px", margin: 0 }}
                >
                  Mashina qo‘shish
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Aside></Aside>
    </div>
  );
};
