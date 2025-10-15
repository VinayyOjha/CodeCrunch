export interface UserRegistrationDetail {
    email: string;
    name: string;
    password: string;
    TIC: string;
}

export interface UserDetail extends UserRegistrationDetail{
    rank: Number;
    streak: Number;
    totalScore: Number;
    problemSolved: Number;
}