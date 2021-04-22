import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import userGen from "username-generator"
import { Button, Input } from 'reactstrap';

const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT);
