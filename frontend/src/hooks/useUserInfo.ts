import { useState } from "react";
import { userService } from "../services";
import { useRouter } from "next/navigation";


interface IUser {
	name:string;
	userName:string;
	email:string;
	password:string;
	confirmPassword?:string;
}

export const useUserInfo = () =>{
	const [user, setUser] = useState<IUser>({} as IUser);
	const router = useRouter();

	const onChangeUserFormData = (k:string, v:string) => {
		setUser((prevState)=>({...prevState, [k]:v}));
	};


	const submit = async () => {

		if (user.confirmPassword) delete user.confirmPassword;
		await userService.createUserService({...user}).then(()=>{
			router.push("/auth/login");
		}).catch(e=>console.log(e));
	};
	
	return {
		user,
		submit,
		onChangeUserFormData
	};
};