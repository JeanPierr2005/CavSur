<?php

namespace App\Http\Controllers;

use App\Models\Match;
use App\Tag;
use Illuminate\Http\Request;

/**
 * Class MatchController
 * @package App\Http\Controllers
 */
class MatchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $matches = Match::paginate(10);

        return view('match.index', compact('matches'))
            ->with('i', (request()->input('page', 1) - 1) * $matches->perPage());


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $match = new Match();
        return view('match.create', compact('match'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate(Match::$rules);

        $match = Match::create($request->all());

        return redirect()->route('matches.index')
            ->with('success', 'Match created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $match = Match::find($id);

        return view('match.show', compact('match'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $match = Match::find($id);

        return view('match.edit', compact('match'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  Match $match
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Match $match)
    {
        request()->validate(Match::$rules);

        $match->update($request->all());

        return redirect()->route('matches.index')
            ->with('success', 'Match updated successfully');
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Exception
     */
    public function destroy($id)
    {
        $match = Match::find($id)->delete();

        return redirect()->route('matches.index')
            ->with('success', 'Match deleted successfully');
    }
}
