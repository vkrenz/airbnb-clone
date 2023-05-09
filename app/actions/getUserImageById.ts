import prisma from '@/app/libs/prismadb';

interface IParams {
    userId?: string;
}

export default async function getUserImageById (params: IParams) {
    try {
        const { userId } = params;

        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            }
        });

        // if (!user || user.image) {
        //     if (!user) {
        //         console.error('No user found');
        //     }
        //     console.error('No user image found');
        // };

        // console.log(user?.image);

        return user?.image
    }
    catch (err: any) {
        throw new Error(err);
    }
}