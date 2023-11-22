//* backend types 
type Image<T = null> = {
  src: string;
  alt ?: string;
}

type UserRole = "user" | "admin";

interface UserDetails {
	id: string;
	name: string;
	image: Image;
	role: UserRole;
}
