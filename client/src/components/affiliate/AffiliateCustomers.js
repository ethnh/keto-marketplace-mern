import React from 'react'
import { connect } from 'react-redux'

const AffiliateCustomers = () => {

  return (
    <div className='admin-affiliates'>
      <div>
        <div className='font-36 pt-3'>Customers</div>
      </div>
      <div className='row my-3'>
        <div className='col-md-12'>
          <div className='table-responsive bg-white keto-rounded-lg keto-shadow'>
            <table className='table'>
              <thead className='thead-light'>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>sales</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) =>
                  <tr key={index}>
                    <td>846232</td>
                    <td>Anthony Hamilton</td>
                    <td>anthony874@gmail.com</td>
                    <td>$1,541.52</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(AffiliateCustomers)