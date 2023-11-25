//* backend types
type Image<T = null> = {
	src: string;
	alt?: string;
};

type UserRole = "user" | "admin";

interface UserDetails {
	id: string;
	name: string;
	email: string;
	password: string;
	dateOfJoining: Date;
	profileImage: Image;
	role: UserRole;
}
