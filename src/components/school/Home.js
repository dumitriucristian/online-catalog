import React from 'react';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,  
          users: [],
        };
      }

     componentDidMount() {
            var token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODc1MjkwMzgsImV4cCI6MTU4NzUzMjYzOCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidGVzdEB0ZXN0LmNvbSJ9.PpQ4fmbPmZ5IhL1sL37S1e52OzRp6pUSSrQfmHOHrR6wCsNhncDXMGH8Fue9cq8p02Ph4uGft_j2_YFq4mJZAkjj6oHw5RxIAV5MSNegcKP1w2qSnFKGpjIRolEVjzV4WP8ollVE62XXZL6RYo6ZQz4EwuVMopihdbuc_s2CE2L-rB7RaTKEBSGB54FD37ncaoUnvHirqp76oWthA0-5nFbwdKE4Lb3l95sgKPHhaPoUxpdPCCFslYcJLRt_wXzPaVNDbCyDqykNS8CA3l9p52wMyDgQpii6OxuMxZQDkabHJ242UV7bTw8r6MsWZaAMDeP6bOpvD1Ed474x2_UppkFd6JRXCXihfqQTf24sKREgCqX7asQxqx0Jlt5N2EdNF67gwxU8wnqgU6VNn1UssObed_suzoTofCaxY9FKXGq6-9w-eRzmEh2TPT5par1GvslZS4vwVxQ8iXA6GkU5mouaC2ztSVzfO6lozRWNS6mdbx9gPXspb60bfFBl_Mmi4XUSXtpZ_1Ayi-yH8T4f85S7-8IiPq5hs3qXo3FP0yx1HwC3H34ioa3rSP7_pWykm6AGUHf6hwZDk7RO0BmeCU5UL6fT06u9x8PVjQqJY6PkRVIjpnBcXyGoTMCVK8iSrO6WBoOuli3vzZQTBVTeaAFoYL_DxBDVNdlc9Be8iMQ';
            fetch('http://localhost:8080/api/test', {
                method: 'GET',
                mode: 'cors',
                credentials: 'omit',
                headers: new Headers({
                    'Content-Type': 'text/plain',
                    'origin':'http://localhost:3000',
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODc1MjkwMzgsImV4cCI6MTU4NzUzMjYzOCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidGVzdEB0ZXN0LmNvbSJ9.PpQ4fmbPmZ5IhL1sL37S1e52OzRp6pUSSrQfmHOHrR6wCsNhncDXMGH8Fue9cq8p02Ph4uGft_j2_YFq4mJZAkjj6oHw5RxIAV5MSNegcKP1w2qSnFKGpjIRolEVjzV4WP8ollVE62XXZL6RYo6ZQz4EwuVMopihdbuc_s2CE2L-rB7RaTKEBSGB54FD37ncaoUnvHirqp76oWthA0-5nFbwdKE4Lb3l95sgKPHhaPoUxpdPCCFslYcJLRt_wXzPaVNDbCyDqykNS8CA3l9p52wMyDgQpii6OxuMxZQDkabHJ242UV7bTw8r6MsWZaAMDeP6bOpvD1Ed474x2_UppkFd6JRXCXihfqQTf24sKREgCqX7asQxqx0Jlt5N2EdNF67gwxU8wnqgU6VNn1UssObed_suzoTofCaxY9FKXGq6-9w-eRzmEh2TPT5par1GvslZS4vwVxQ8iXA6GkU5mouaC2ztSVzfO6lozRWNS6mdbx9gPXspb60bfFBl_Mmi4XUSXtpZ_1Ayi-yH8T4f85S7-8IiPq5hs3qXo3FP0yx1HwC3H34ioa3rSP7_pWykm6AGUHf6hwZDk7RO0BmeCU5UL6fT06u9x8PVjQqJY6PkRVIjpnBcXyGoTMCVK8iSrO6WBoOuli3vzZQTBVTeaAFoYL_DxBDVNdlc9Be8iMQ'
                }),

            })
            .then( (results) => {
                console.log(results);
                return results.json();
            }).then(
        (data) =>{
                    this.setState({
                        isLoaded: true,
                        users: data
                    });
                },
        (error) =>{
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
     }

     render() {
         const { error, isLoaded, users } = this.state;
         if ( error) {
            return <div>Error: {error.message}</div>;
         }else if (!isLoaded) {
             return <div>Loading...</div>;
         }else{

         }
         return (
           <div>
              <p>{users.data}</p>
           </div>
         )
     }
}


export default Home;