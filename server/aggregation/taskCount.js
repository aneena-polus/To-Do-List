export const getTotalCount = (userId) => [
    {
        $match: { createUser: userId },
    },
    {
        $group: {
            _id: null,
            taskCount: {
                $sum: 1,
            }
        }
    }
];
