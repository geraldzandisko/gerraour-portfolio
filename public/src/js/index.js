// CSSs, SCSSs, JSs
import '../scss/styles.scss'
import '../../src/css/styles.css';
import '../../src/css/media-queries.css';

import $ from 'jquery'
import * as bootstrap from 'bootstrap'
import { tns } from "tiny-slider"

import './firebase'
import './scripts'

const tnslider1 = tns({
    "container": ".my-slider",
    "mouseDrag": true,
    "controls": false,
    "nav": false,
    "speed": 500,
    "gutter": 20,
    "edgePadding": 100,
    "loop": false,
    "rewind": true,
    "startIndex": 1
})

const tnslider2 = tns({
    "container": ".work-list-slider",
    "mouseDrag": true,
    "controls": false,
    "nav": false,
    "speed": 500,
    "autoWidth": true,
    "gutter": 20,
    "edgePadding": 50,
    "loop": false,
    "rewind": true,
    "startIndex": 0
})
