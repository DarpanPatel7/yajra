<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SecureJsController extends Controller
{
    public function index()
    {
        $fileContent = Storage::get('private-js/your-secure.js');

        return response($fileContent, 200)
            ->header('Content-Type', 'text/javascript');
    }

    public function serveJavaScript()
    {
        // Load and return the JavaScript file here
        return response()->file('private/student.js');
    }
}
