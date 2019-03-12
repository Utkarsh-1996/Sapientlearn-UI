
    test('should test the user is existing',function(assert){
        userList = ['abc123','xyz'];
        //console.log(userList)
        assert.expect(1)
        let checkUser = isAuthorizedPromise('abc123')
        return checkUser.then((result)=>{
            assert.equal(result,true)
        })
    })


    test('should test the user is existing',function(assert){
        userList = null;
        //console.log(userList)
        assert.expect(1)
        let checkUser = isAuthorizedPromise('abc123')
        return checkUser.then((result)=>{
            assert.equal(result,true)
        })
    })

