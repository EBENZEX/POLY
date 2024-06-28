import PopAlert from "../common/formInput/PopAlert";
import Input from "../common/formInput/Input";
import { useState } from "react";

export default function ChangeProfileAlert({ state, setState }) {
	const [id, setId] = useState("");
	const [nama, setNama] = useState("");
	const [email, setEmail] = useState("");
	const [hp, setHp] = useState("");
	const [data, setData] = useState({
		id: "P01",
		nama: "Steve Arviano",
		email: "Stevear@gmail.com",
		hp: "09123456789",
	});

	function handleChange() {
		setState((prev) => !prev);
		const newData = {
			...data,
			id: id || data.id,
			nama: nama || data.nama,
			email: email || data.email,
			hp: hp || data.hp,
		};
		localStorage.setItem("profile", JSON.stringify(newData));
		setData(newData);

		setTimeout(() => {
			window.location.reload();
		}, 100);
	}
	return (
		<PopAlert title={"Change Profile"} state={state} onClick={handleChange} open={"SAVE"}>
			<Input htmlFor={"id"} label={"ID Pengguna"} value={id} onChange={(event) => setId(event.target.value)} />
			<Input htmlFor={"nama"} label={"Nama Pengguna"} value={nama} onChange={(event) => setNama(event.target.value)} />
			<Input
				htmlFor={"email"}
				label={"Email Pengguna"}
				type={"email"}
				value={email}
				onChange={(event) => setEmail(event.target.value)}
			/>
			<Input
				htmlFor={"hp"}
				label={"Nomor Handphone"}
				type={"number"}
				value={hp}
				onChange={(event) => setHp(event.target.value)}
			/>
			<Input htmlFor={"username"} label={"Username"} />
			<Input htmlFor={"password"} label={"Password"} type={"password"} />
		</PopAlert>
	);
}
