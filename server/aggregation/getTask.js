export const getTask = (userId, limitVal) => {
    const pipeline = [
        {
            $match: {
                createUser: userId,
            },
        },
        {
            $sort: {
                updateTimestamp : 1
            },
        },
    ];
    if (limitVal) {
        pipeline.push({
            $match: { status: limitVal == "1" ? "Completed" : "Pending" },
        });
    }
    return pipeline;
};
