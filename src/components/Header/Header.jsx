import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header_inner_shadow}></div>
      <div className={s.header_content}>
        <div className={s.header_billboard}>
          <img
            src="https://occ-0-2482-3646.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcZdjcnDphK1TiPkNt19wMxyqql90YEzja-IMmQi9UeArdtQC1CC_yNRYPmTUlb6UXo4UlbH9SAPPZWwwzDdVEwmIRwFQCVAwYzcLP2jRu_p.webp?r=e02"
            alt="billboard"
          />
        </div>
        <div className={s.header_description}>
          "Yeon-du asks her best friend Bora to collect all the information she
          can about Baek Hyun-jin while she is away in the U.S. for heart
          surgery. Bora decides to get close to Baek's best friend, Pung Woon-ho
          first. However, Bora's clumsy plan unfolds in an unexpected direction.
          In 1999, a year before the new century, Bora, who turns seventeen,
          falls into the fever of first love."
        </div>
        <div className={s.header_buttons}>
          <button className={`${s.header_button} ${s.play_button}`}>
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 5.274c0-1.707 1.826-2.792 3.325-1.977l12.362 6.726c1.566.853 1.566 3.101 0 3.953L8.325 20.702C6.826 21.518 5 20.432 5 18.726V5.274Z"
                fill="#000000"
              />
            </svg>
            Play
          </button>
          <button className={`${s.header_button} ${s.my_list_button}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                fill="currentColor"
              ></path>
            </svg>
            More Info
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;