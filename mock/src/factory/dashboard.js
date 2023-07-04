const getFakeDashboard = () =>{
    return{
        bookCommentCount: 0,
        userBooksReviewCount: 0,
        userCashWallet: 0,
        userCoinWallet: 40,
        userLikeBooksCount: 0,
        userFriendCount: 0,
        userHearts : 5,
    }
}

module.exports = { getFakeDashboard };
