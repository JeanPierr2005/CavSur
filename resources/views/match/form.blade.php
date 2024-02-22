
<div class="form-group mb-3">
    <label class="form-label">   {{ Form::label('location') }}</label>
    <div>
        {{ Form::text('location', $match->location, ['class' => 'form-control' .
        ($errors->has('location') ? ' is-invalid' : ''), 'placeholder' => 'Location']) }}
        {!! $errors->first('location', '<div class="invalid-feedback">:message</div>') !!}
        <small class="form-hint">match <b>location</b> instruction.</small>
    </div>
</div>
<div class="form-group mb-3">
    <label class="form-label">   {{ Form::label('date') }}</label>
    <div>
        {{ Form::text('date', $match->date, ['class' => 'form-control' .
        ($errors->has('date') ? ' is-invalid' : ''), 'placeholder' => 'Date']) }}
        {!! $errors->first('date', '<div class="invalid-feedback">:message</div>') !!}
        <small class="form-hint">match <b>date</b> instruction.</small>
    </div>
</div>
<div class="form-group mb-3">
    <label class="form-label">   {{ Form::label('activity') }}</label>
    <div>
        {{ Form::text('activity', $match->activity, ['class' => 'form-control' .
        ($errors->has('activity') ? ' is-invalid' : ''), 'placeholder' => 'Activity']) }}
        {!! $errors->first('activity', '<div class="invalid-feedback">:message</div>') !!}
        <small class="form-hint">match <b>activity</b> instruction.</small>
    </div>
</div>
<div class="form-group mb-3">
    <label class="form-label">   {{ Form::label('num_referee') }}</label>
    <div>
        {{ Form::text('num_referee', $match->num_referee, ['class' => 'form-control' .
        ($errors->has('num_referee') ? ' is-invalid' : ''), 'placeholder' => 'Num Referee']) }}
        {!! $errors->first('num_referee', '<div class="invalid-feedback">:message</div>') !!}
        <small class="form-hint">match <b>num_referee</b> instruction.</small>
    </div>
</div>
<div class="form-group mb-3">
    <label class="form-label">   {{ Form::label('details') }}</label>
    <div>
        {{ Form::text('details', $match->details, ['class' => 'form-control' .
        ($errors->has('details') ? ' is-invalid' : ''), 'placeholder' => 'Details']) }}
        {!! $errors->first('details', '<div class="invalid-feedback">:message</div>') !!}
        <small class="form-hint">match <b>details</b> instruction.</small>
    </div>
</div>

    <div class="form-footer">
        <div class="text-end">
            <div class="d-flex">
                <a href="#" class="btn btn-danger">Cancel</a>
                <button type="submit" class="btn btn-primary ms-auto ajax-submit">Submit</button>
            </div>
        </div>
    </div>
