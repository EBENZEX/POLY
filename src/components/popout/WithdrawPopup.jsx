import React from "react";
import PopAlert  from "../PopAlert";
import Input from "../common/formInput/Input";

export default function WithdrawPopup({ open, setOpen }) {
	return (
      <PopAlert title={"Trade"} state={open} setState={setOpen} open={"WITHDRAW"}>
			<Input htmlFor={"nominal"} label={"Masukkan Nominal"} />
		</PopAlert>
	);
}
