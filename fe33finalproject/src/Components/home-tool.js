import React, { Component } from 'react'
import { connect } from 'react-redux'
// Comment 
 class HomeTool extends Component {
    render() {
        return (
            <div className="wrapper d-flex home-tool">
            <select class="form-control selectChoice">
            <option>Phim</option>
            </select>
            <select class="form-control selectChoice">
            <option>Rap</option>
            </select>
            <select class="form-control selectChoice">
            <option>Ngay Xem</option>
            </select>
            <select class="form-control selectChoice">
            <option>Suat Chieu</option>
            </select>
            <button className="btn-datve btn btn-primary" >
            Mua vé ngay
            </button>
        </div>
 
        )
    }
}
const mapStateToProps =(state)=>({
    movie : state.movieReducer.movie,
})
export default connect(mapStateToProps,null) (HomeTool)