import { useState } from "react";
import { UserService } from "../services/userService";

export const useUserInfo = () =>{
	const [user, setUser] = useState({});


	const submit = async () =>{
		await UserService.create({name:"joaasdsado123", userName:"asdasdsa1asdas2312321", email:"adsadsad@sadsadsa.com", password:"123sadshaid"});
	};

	return {
		user,
		setUser,
		submit
	};
};